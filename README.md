# Inpaint Web

![Inpaint Web Interface](media/cover.png)

A web-based image inpainting and super-resolution tool built with React, TypeScript, and OpenCV.js. This project is a fork of [lxfater/inpaint-web](https://github.com/lxfater/inpaint-web) with additional features and improvements.

## 📋 Overview

Inpaint Web is a browser-based application that allows users to:

- **Remove objects** from images using intelligent inpainting
- **Upscale images** using super-resolution technology
- **Draw masks** to specify areas for removal
- **View history** of edits and revert to previous states
- **Download** the processed images

The application uses machine learning models running in the browser via WebAssembly for real-time image processing.

## 🚀 Features

- **Interactive Drawing Tools**: Draw masks on images to specify areas for inpainting
- **Real-time Processing**: See results as you draw
- **History Management**: Undo actions and revert to previous states
- **Super Resolution**: Enhance image quality and resolution
- **Multi-language Support**: English and Spanish interfaces
- **Responsive Design**: Works on desktop and mobile devices

## 🛠️ Technologies

- **Frontend**: React 17, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Image Processing**: OpenCV.js
- **Machine Learning**: ONNX Runtime Web
- **State Management**: React hooks
- **Internationalization**: Paraglide (inlang)
- **Caching**: localForage

## 📦 Installation

### Prerequisites

- Node.js 16 or higher
- npm or yarn

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/inpaint-web.git
   cd inpaint-web
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

4. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
# or
yarn build
```

The production build will be available in the `dist` directory.

## 🎨 Usage

1. **Upload an Image**: Click the "Select Image" button to upload an image file
2. **Draw Masks**: Use the brush tool to draw on areas you want to remove
3. **Process**: The application automatically processes the image as you draw
4. **Undo**: Use the undo button or Ctrl+Z to revert changes
5. **Download**: Click the download button to save the processed image
6. **Super Resolution**: Use the upscale button to enhance image quality

## 📁 Project Structure

```
/
├── public/              # Static files and examples
├── src/
│   ├── adapters/        # Model loading and processing
│   ├── components/      # Reusable UI components
│   ├── paraglide/       # Internationalization files
│   ├── App.tsx          # Main application component
│   ├── Editor.tsx       # Image editing interface
│   └── utils.ts         # Utility functions
├── test/                # Test images
├── project.inlang/      # Internationalization configuration
└── ...
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch for your feature or bug fix
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📜 License

This project is licensed under the **GNU Affero General Public License v3.0** (AGPL-3.0).

See the [LICENSE](LICENSE) file for more details.

## 🔗 Links

- **Original Project**: [lxfater/inpaint-web](https://github.com/lxfater/inpaint-web)
- **Issue Tracker**: [GitHub Issues](https://github.com/lxfater/inpaint-web/issues)
