// Converts to time and date for each post
export const unixConversion = (dt: number, time: boolean) => {
  const dateObject = new Date(dt);
  return time ? `${dateObject.getHours()}:${(dateObject.getMinutes() < 10 ? "0" : "") + dateObject.getMinutes()}` : dateObject.toLocaleDateString()
}