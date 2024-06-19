# Daily Scoop News App

Daily Scoop is a news application built using Vite, React, and TypeScript. It fetches top headlines from the GNews API and displays them by category. The app supports search functionality and provides a smooth user experience with animations powered by Framer Motion. Tailwind CSS and ShadCN are used for styling and UI components.

## Features

- **Category-Based News**: Users can filter news by various categories such as World, Business, Technology, Sports, Entertainment, Science, and Health.
- **Search Functionality**: Users can search for news articles by entering keywords.
- **Animations**: Smooth animations using Framer Motion.
- **Responsive Design**: Mobile-friendly and responsive design using Tailwind CSS.
- **State Management**: Redux Toolkit is used for API fetching, state management, loading states, and error handling.

## Tech Stack

- **Frontend**: [Vite](https://vitejs.dev/), [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/), [ShadCN](https://shadcn.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **API**: [GNews API](https://gnews.io/)

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/daily-scoop.git
    cd daily-scoop
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the development server**:
    ```bash
    npm run dev
    ```

4. **Build for production**:
    ```bash
    npm run build
    ```
    
### Fetching News

- **By Category**: Click on any category button to fetch news articles for that category.
- **Search**: Enter a keyword in the search input and click the search icon to fetch news articles matching the keyword.
