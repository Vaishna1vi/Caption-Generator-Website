export async function POST(req) {
    const formData = await req.formData();
    const file = formData.get('file');
    console.log(file);
    // const {name, type}= file;
    const name = file.name;
    const type = file.type;
    return Response.json(file);
}