// app/public-hearing/page.tsx
import PublicHearingWithMap from "../../components/PublicHearingWithMap";

export default function PublicHearingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
      <div className="container mx-auto px-4">
        <PublicHearingWithMap />
      </div>
    </div>
  );
}