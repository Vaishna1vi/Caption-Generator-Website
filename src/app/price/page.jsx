import PageHeaders from "../components/pageHeaders";
export default function pagePrice() {
    return (
        <div>
        <PageHeaders
        h1text={"Check-out our pricing"}
        h2text={"Easy to pay and less price"}
        />
        <div className="bg-white text-slate-600 text-center mx-auto max-w-sm rounded-lg p-4">
            <h3 className="font-bold text-3xl">Free</h3>
            <h4>Free forever</h4>
        </div>
        </div>
    );
}