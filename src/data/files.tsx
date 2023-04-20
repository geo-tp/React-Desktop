import { FileType, FileTypeEnum } from "../types";
import Img1 from "../assets/img1.jpg";
import Img2 from "../assets/img2.jpg";
import Img3 from "../assets/img3.jpg";
import Img4 from "../assets/img4.jpg";
import Img5 from "../assets/img5.jpg";
import Img6 from "../assets/img6.jpg";
import Img7 from "../assets/img7.jpg";
import Img8 from "../assets/img8.jpg";
import Img9 from "../assets/img9.jpg";
import Img10 from "../assets/img10.jpg";
import Img11 from "../assets/img11.jpg";
import Img12 from "../assets/img12.jpg";

export const files: FileType[] = [
  {
    id: 1,
    name: "Home",
    type: FileTypeEnum.Folder,
    content: "",
    parent: "Desktop",
    selected: false,
  },

  {
    id: 2,
    name: "Firefox",
    type: FileTypeEnum.Firefox,
    content: "",
    parent: "Desktop",
    selected: false,
  },

  {
    id: 3,
    name: "notes.txt",
    type: FileTypeEnum.Text,
    content: `
          <h1>Lorem Ipsum</h1>
      <p>
        dolor sitamet, consectetur adipiscing elit, sed do eiusm\\n od tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        qui s nostrud exercitation ullamco laboris ni
      </p>
      <ul>
        <li>nisi ut aliquip ex ea commodo consequat.</li>
        <li>reprehenderit in voluptate velit ess</li>
        <li>velit esse cillum dolore eu fugia</li>
      </ul>
      <p>
        dolor sitamet, consectetur adipiscing elit, sed do eiusm\\n od tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        qui s nostrud exercitation ullamco laboris ni
      </p>
      <ul>
        <li>nisi ut aliquip ex ea commodo consequat.</li>
        <li>reprehenderit in voluptate velit ess</li>
        <li>velit esse cillum dolore eu fugia</li>
      </ul>
      <p>
        dolor sitamet, consectetur adipiscing elit, sed do eiusm\\n od tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        qui s nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor i n reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat n on proident, sunt in culpa qui officia deserunt mollit anim
        id est laborum. Lorem ipsum dolor sit amet, consectetur adip iscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.
      </p>
      <p>
        dolor sitamet, consectetur adipiscing elit, sed do eiusm\\n od tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        qui s nostrud exercitation ullamco laboris ni
      </p>
      <ul>
        <li>nisi ut aliquip ex ea commodo consequat.</li>
        <li>reprehenderit in voluptate velit ess</li>
        <li>velit esse cillum dolore eu fugia</li>
      </ul>
      <p>
        dolor sitamet, consectetur adipiscing elit, sed do eiusm\\n od tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        qui s nostrud exercitation ullamco laboris ni
      </p>
      <ul>
        <li>nisi ut aliquip ex ea commodo consequat.</li>
        <li>reprehenderit in voluptate velit ess</li>
        <li>velit esse cillum dolore eu fugia</li>
      </ul>
      <p>
        dolor sitamet, consectetur adipiscing elit, sed do eiusm\\n od tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        qui s nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor i n reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat n on proident, sunt in culpa qui officia deserunt mollit anim
        id est laborum. Lorem ipsum dolor sit amet, consectetur adip iscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.
      </p>
    `,
    parent: "Desktop",
    selected: false,
  },

  {
    id: 4,
    name: "image_random5.jpeg",
    type: FileTypeEnum.Image,
    content: Img1,
    parent: "Desktop",
    selected: false,
  },

  {
    id: 6,
    name: "image_random3.jpeg",
    type: FileTypeEnum.Image,
    content: Img3,
    parent: "Home",
    selected: false,
  },

  {
    id: 7,
    name: "image_random2.jpeg",
    type: FileTypeEnum.Image,
    content: Img4,
    parent: "Home",
    selected: false,
  },
  {
    id: 8,
    name: "img.jpeg",
    type: FileTypeEnum.Image,
    content: Img5,
    parent: "Home",
    selected: false,
  },

  {
    id: 5,
    name: "image2.jpeg",
    type: FileTypeEnum.Image,
    content: Img6,
    parent: "Home",
    selected: false,
  },
  {
    id: 9,
    name: "random.jpg",
    type: FileTypeEnum.Image,
    content: Img7,
    parent: "Home",
    selected: false,
  },
  {
    id: 10,
    name: "image4.jpeg",
    type: FileTypeEnum.Image,
    content: Img8,
    parent: "Home",
    selected: false,
  },

  {
    id: 11,
    name: "image_random1.jpeg",
    type: FileTypeEnum.Image,
    content: Img9,
    parent: "Home",
    selected: false,
  },

  {
    id: 12,
    name: "Documents",
    type: FileTypeEnum.Folder,
    content: "",
    parent: "Root",
    selected: false,
  },

  {
    id: 13,
    name: "Musiques",
    type: FileTypeEnum.Folder,
    content: "",
    parent: "Root",
    selected: false,
  },

  {
    id: 14,
    name: "Video",
    type: FileTypeEnum.Folder,
    content: "",
    parent: "Root",
    selected: false,
  },

  {
    id: 15,
    name: "Download",
    type: FileTypeEnum.Folder,
    content: "",
    parent: "Root",
    selected: false,
  },
  {
    id: 16,
    name: "picture1.jpeg",
    type: FileTypeEnum.Image,
    content: Img10,
    parent: "Home",
    selected: false,
  },
  {
    id: 17,
    name: "picture2.jpeg",
    type: FileTypeEnum.Image,
    content: Img11,
    parent: "Home",
    selected: false,
  },
  {
    id: 18,
    name: "picture3.jpeg",
    type: FileTypeEnum.Image,
    content: Img12,
    parent: "Home",
    selected: false,
  },
  {
    id: 19,
    name: "react_desktop.txt",
    type: FileTypeEnum.Text,
    content: `
      <h1>React Desktop OS</h1>

      <p>React desktop style app including :</p>

      <ul>
        <li>Draggable frame</li>
        <li>Resizable frame</li>
        <li>Window management</li>
        <li>Embedded browser</li>
        <li>Text viewer</li>
        <li>Image viewer</li>
        <li>Screenshots</li>
      </ul>
        
      
      <h2>Version</h2>

      <p>Created with Node v17.9.1 and npm 8.11.0</p>
      
      <h2>Installation</h2>
      <p>This project was bootstrapped with Create React App, using the Redux and Redux Toolkit TS template.</p>
      
      <p>In the project directory, you can run:</p>
      
      <h3>npm start</H3>
      <p>
        Runs the app in the development mode.
        Open http://localhost:3000 to view it in the browser.
        
        The page will reload if you make edits.
        You will also see any lint errors in the console.
      </p>
      <h3>npm test</h3>
      <p>
        Launches the test runner in the interactive watch mode.
        See the section about running tests for more information.
      </p>
      <h3>npm run build</h3>
      <p>
        Builds the app for production to the build folder.
        It correctly bundles React in production mode and optimizes the build for the best performance.
        
        The build is minified and the filenames include the hashes.
        Your app is ready to be deployed!
        
        See the section about deployment for more information.
      </p>
      <h3>npm run eject</h3>
      <p>
        Note: this is a one-way operation. Once you eject, you can’t go back!
      </p>

      <p>
        If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.
        
        Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.
        
        You don’t have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
        
        Learn More
        You can learn more in the Create React App documentation.
        
        To learn React, check out the React documentation.
      </p>

    `,
    parent: "Home",
    selected: false,
  },
];
