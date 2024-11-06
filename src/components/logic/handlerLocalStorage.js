export function SaveItem(id, data) {
  if (!data && !id) {
    return -1;
  }

  localStorage.setItem(id, JSON.stringify(data));
}

export function LoadItem(id) {
  return JSON.parse(localStorage.getItem(id));
}
