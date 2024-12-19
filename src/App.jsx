import React, { useState } from "react";
import PDFListView from "./components/PDFListView";
import PDFReaderView from "./components/PDFReaderView";
import SearchBar from "./components/SearchBar";
import pdfs from "./data/pdf.json";
import "./App.css";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPDF, setSelectedPDF] = useState(null);

  const filteredPDFs = pdfs.filter(pdf =>
    pdf?.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
      <header className="header">
        <h1>PDF Browser</h1>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </header>
      <main className="main">
        {selectedPDF ? (
          <PDFReaderView pdf={selectedPDF} setSelectedPDF={setSelectedPDF} />
        ) : (
          <PDFListView pdfs={filteredPDFs} setSelectedPDF={setSelectedPDF} />
        )}
      </main>
    </div>
  );
};

export default App;
