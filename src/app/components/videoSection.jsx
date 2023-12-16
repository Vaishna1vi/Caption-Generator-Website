import LanguageIcon from "./languageIcon";

export default function videoSection() {
    return (
        <section className="flex justify-around mt-12 items-center">
        <div className="bg-gray-900/60 w-[240px] h-[480px] rounded-xl"></div>
        <div>
          <LanguageIcon />
        </div>
        <div className="bg-gray-900/60 w-[240px] h-[480px] rounded-xl"></div>
      </section>
    );
}