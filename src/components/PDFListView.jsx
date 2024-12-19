import React from "react";
import "./PDFListView.css";
import img1 from "../../public/understanding_machine_learning_by_shai_shalev.jpg";
import img2 from "../../public/machine_learning_by_tom_m_mitchell.jpg";
import img3 from "../../public/machine_learning_by_thomas.jpg";
import img4 from "../../public/introduction_to_machine_learning_by_vipin_img.webp";
import img5 from "../../public/Introduction_to_machine_learning_by_alex_somla.jpg";
import img6 from "../../public/machine_learning_by_judith_and_daniel.jpg";
import img7 from "../../public/the_disciple_of_machine_learning_by_tom.jpg";
import img8 from "../../public/machine_learning_the_basic_by_alaxender_jung.jpg";

import img9 from "../../public/10_misunderstanding_about_machine_learning.jpg";
import img10 from "../../public/the_fundamental_of_machine_learning.jpg";
import img11 from "../../public/theoretical_machine_learning_by_rob.png";
import img12 from "../../public/ultimate_guide_to_machine_learning_for_embedding_system.png";
import img13 from "../../public/machine_learning_by_k.jpg";
import img14 from "../../public/life_long_machine_learning_zeihuan_chen.jpg";
import img15 from "../../public/10_misunderstanding_about_machine_learning.jpg";



const pdfThumbnail = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15]

const PDFListView = ({ pdfs, setSelectedPDF }) => {
    console.log(pdfs)

    return (
        <div className="pdf-list">
            {
                pdfs.map((pdf, index) => {
                    return (
                        <div key={index} className="pdf-item" onClick={() => setSelectedPDF(pdf)}>

                            <div className="pfg_image_container">
                                <img src={pdfThumbnail[index]} alt={pdf.title} className="pdf-thumbnail" />
                            </div>

                            <div className="pdf-info">
                                <h3>{pdf.name}</h3>
                                <p>{pdf.author}</p>
                                <p className="publishYear">{pdf.published}</p>
                            </div>
                        </div>
                    )
                }
                )}
        </div>
    );
};

export default PDFListView;
