import { useEffect, useState } from "react";

export const DEFAULT_LOCATION = "Brighton Sussex";

type ReverseGeocodeResponse = {
  city?: string;
  locality?: string;
  principalSubdivision?: string;
};

function formatLocationLabel(data: ReverseGeocodeResponse): string | null {
  const place = data.city?.trim() || data.locality?.trim();
  const region = data.principalSubdivision?.trim();

  if (place && region && !place.toLowerCase().includes(region.toLowerCase())) {
    return `${place} ${region}`;
  }

  return place || region || null;
}

/**
 * Resolves a friendly place label from the device location.
 * Falls back to Brighton Sussex when permission is denied or lookup fails.
 */
export function useUserLocation() {
  const [location, setLocation] = useState(DEFAULT_LOCATION);

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      return;
    }

    let cancelled = false;

    navigator.geolocation.getCurrentPosition(
      async ({ coords }) => {
        try {
          const params = new URLSearchParams({
            latitude: String(coords.latitude),
            longitude: String(coords.longitude),
            localityLanguage: "en",
          });
          const response = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?${params}`,
          );

          if (!response.ok) {
            return;
          }

          const data = (await response.json()) as ReverseGeocodeResponse;
          const label = formatLocationLabel(data);

          if (!cancelled && label) {
            setLocation(label);
          }
        } catch {
          // Keep the Brighton Sussex default.
        }
      },
      () => {
        // Permission denied or unavailable — keep default.
      },
      {
        enableHighAccuracy: false,
        maximumAge: 1000 * 60 * 30,
        timeout: 8000,
      },
    );

    return () => {
      cancelled = true;
    };
  }, []);

  return location;
}

export function resolveSubNavLabel(template: string, location: string) {
  return template.replaceAll("{location}", location);
}
