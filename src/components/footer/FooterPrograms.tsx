const FooterPrograms = () => {
  const programs = [
    "Tree Planting",
    "Ocean Cleanup",
    "Wildlife Protection",
    "Climate Action",
    "Eco Education",
    "Sustainable Living",
  ];

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Our Programs</h3>
      <ul className="space-y-2">
        {programs.map((program) => (
          <li key={program}>
            <a href="#" className="text-forest-300 hover:text-white text-sm">
              {program}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterPrograms;
