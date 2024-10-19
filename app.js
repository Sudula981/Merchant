

    <h1>Create Catalogue</h1>
    <button onclick="showUpload()">Bulk Upload</button>
    <button onclick="addProducts()">Add Products</button>

    <div id="fileUpload">
        <input type="file" id="fileInput" multiple>
        <button onclick="uploadFiles()">Upload</button>
    </div>

    <script>
        function showUpload() {
            document.getElementById('fileUpload').style.display = 'block';
        }

        function addProducts() {
            alert('Add Products button clicked!');
            // Add your logic for adding products here
        }

        function uploadFiles() {
            const files = document.getElementById('fileInput').files;
            if (files.length > 0) {
                alert(`Uploading ${files.length} file(s)...`);
                // Add your file upload logic here
                for (const file of files) {
                    console.log(`Uploaded: ${file.name}`);
                }
            } else {
                alert('No files selected.');
            }
        }
    </script>
