export function getSafeLocalStorage(): Storage | null {
  try {
    return globalThis.localStorage;
  } catch {
    return null;
  }
}

export function readLocalStorageValue(key: string): string | null {
  const storage = getSafeLocalStorage();
  if (!storage) return null;
  try {
    return storage.getItem(key);
  } catch {
    return null;
  }
}

export function writeLocalStorageValue(key: string, value: string): void {
  const storage = getSafeLocalStorage();
  if (!storage) return;
  try {
    storage.setItem(key, value);
  } catch {
    // ignore storage access failures in constrained browsers / privacy modes
  }
}

export function removeLocalStorageValue(key: string): void {
  const storage = getSafeLocalStorage();
  if (!storage) return;
  try {
    storage.removeItem(key);
  } catch {
    // ignore storage access failures in constrained browsers / privacy modes
  }
}
