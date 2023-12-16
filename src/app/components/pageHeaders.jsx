export default function pageHeaders({
h1text = "",
h2text = "",
}) {
    return (
        <section className="text-center mt-24 mb-8">
        <h1 className="text-3xl" style={{ textShadow: "2px 2px 0 #001524" }}> 
          {h1text}
        </h1>
        <h2 className="text-white/75">
          {h2text}
        </h2>
      </section>
    );
}