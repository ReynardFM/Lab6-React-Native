# Redux Todo App

A simple Todo application for React Native, built with Redux for state management.

## Features

*   Add, start, complete, and delete todos.
*   Filter todos by status: All, Pending, Ongoing, Completed.
*   Track your progress with a completion percentage.
*   Redux state management with Redux Toolkit.
*   Debugging with Reactotron.

## Getting Started

### Prerequisites

*   [Node.js](https://nodejs.org/) (LTS version recommended)
*   [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)
*   [React Native development environment](https://reactnative.dev/docs/environment-setup)

### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/ReynardFM/Lab6-React-Native.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd Lab6-React-Native
    ```
3.  Install the dependencies:
    ```sh
    npm install
    # or
    yarn install
    ```

### Running the App

1.  Start the Metro bundler:
    ```sh
    npm start
    # or
    yarn start
    ```
2.  In a new terminal, run the app on your desired platform:
    *   **Android:**
        ```sh
        npm run android
        # or
        yarn android
        ```
    *   **iOS:**
        ```sh
        npm run ios
        # or
        yarn ios
        ```

## Usage

Once the application is running on your device or emulator:

1.  **Add a Todo:** Type your task in the input field and tap the "Add" button.
2.  **Start a Todo:** For a "pending" task, tap the "play" icon next to it to mark it as "ongoing".
3.  **Complete/Uncomplete a Todo:** For "ongoing" or "completed" tasks, tap the checkbox to toggle its completion status.
4.  **Delete a Todo:** Tap the "trash" icon next to any task. You will be prompted to confirm the deletion.
5.  **Filter Todos:** Use the filter tabs ("All", "Pending", "Ongoing", "Completed") at the top to view tasks by their status.
6.  **Track Progress:** The header displays the total number of tasks, active tasks, completed tasks, and the completion percentage.

## Debugging with Reactotron

Reactotron is configured to help you debug the Redux state and actions.

1.  **Ensure Reactotron is Running:** Start the Reactotron desktop application on your computer.
2.  **Connect Your App:** When your React Native app starts, it should automatically connect to Reactotron.
3.  **Monitor Redux State:** In the Reactotron app, you can:
    *   View all dispatched Redux actions in real-time.
    *   Inspect the Redux state tree after each action.
    *   Time travel through your Redux state.

If your app is not connecting to Reactotron, ensure that your device/emulator and your computer are on the same network, and that Reactotron is allowed through your firewall.