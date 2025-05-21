// ProfileModel.js
export async function fetchProfiles() {
  const response = await fetch('/profiles.json');
  if (!response.ok) throw new Error('Failed to fetch profiles');
  return await response.json();
}
