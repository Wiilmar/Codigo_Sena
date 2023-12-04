import { Router } from "express";
import { buildPDF } from "../libs/pdfKit.js";

const router = Router()

router.get('/downloadPdf', (req, res) => {

    const stream = res.writeHead(200, {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=wilmanPDF.pdf"
    }) //agregar cabeceras

    buildPDF(
        (data) => stream.write(data),
        () => stream.end()
    );

    res.send("downloadPdf")
})

export default router