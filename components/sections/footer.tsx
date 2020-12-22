export const Footer: React.FC = () => {
  return (
    <div className="bg-gray-900">
      <div className="text-center bg-gray-800 text-gray-600 text-sm p-4 mt-8">
        © {new Date().getFullYear()} Atharva Kulkarni ·{" "}
        <a
          className="text-blue-500"
          href="https://github.com/compilezero/personal-portfolio-notion"
        >
          Source
        </a>
      </div>
    </div>
  );
};
