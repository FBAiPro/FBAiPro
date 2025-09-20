// Temporary wrapper to render the component you added under homepage/app/page.tsx
// When ready, we can flatten the structure by moving files from homepage/app/* up one level.
import HomepageInner from "./app/page";

export default function Homepage() {
  return <HomepageInner />;
}
