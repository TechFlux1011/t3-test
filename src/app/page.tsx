import Link from "next/link";

const mockUrls =[
  "https://bfibhbdrox.ufs.sh/f/4JX9PvZONk3T8tvQNp5ERgJ0AWLbV4x2pMZijPsQwafq61e9",
  "https://bfibhbdrox.ufs.sh/f/4JX9PvZONk3TaL6bAvnZ6wpkRsnGjYNWgxT4dOXZfvKti9Uu",
  "https://bfibhbdrox.ufs.sh/f/4JX9PvZONk3TMqBH7JPU6ZTQxadXV2wYoNPLitpWSGygv3Ec",
  "https://bfibhbdrox.ufs.sh/f/4JX9PvZONk3TFGKpGRHE7y8Xm9NP6FsTa3j1AlvgLWDbHoZk"
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="flex flex-wrap gap-6">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="img" />
          </div>
        ))}
      </div>
    </main>
  );
}
