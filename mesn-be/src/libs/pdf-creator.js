import pdf from 'pdf-creator-node';
import fs from 'fs-extra';

export default async function createPDF(order) {
    try {
        let html = fs.readFileSync("src/libs/index.html", "utf-8");

        let values = Object.assign({}, order._doc);

        let document = {
            html,
            data: {
                values
            },
            path: `uploads/doc/${order._id}.pdf`
        };

        let options = {
            format: "A3",
            orientation: "portrait",
            border: "10mm"
        };

        await pdf.create(document, options);
        return document.path;
    } catch (error) {
        return error;
    }
}