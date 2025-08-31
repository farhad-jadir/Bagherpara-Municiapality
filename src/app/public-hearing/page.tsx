// app/public-hearing/page.tsx
import PublicHearing from "../../components/PublicHearing";

export default function PublicHearingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8">
      <div className="container mx-auto px-4">
        <PublicHearing />
      </div>
    </div>
  );
}