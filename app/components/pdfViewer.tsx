interface PdfViewerProps { fileUrl: string;}

const PdfViewer = ({ fileUrl }: PdfViewerProps) => {
    return (
      <iframe src={fileUrl} width="100%" height="1000px" style={{ border: 'none' }} title="PDF Viewer" ></iframe>
    );
  };
  
  export default PdfViewer;
  