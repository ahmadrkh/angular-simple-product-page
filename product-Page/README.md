# ProductPage

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.10.

## Preparing the Project

Before running the development server, ensure the following steps are completed:

1. **Install Dependencies**:
   Run the following command to install all required dependencies:
   ```bash
   npm install
   ```

2. **Verify Angular CLI Installation**:
   Ensure that Angular CLI is installed globally. If not, install it using:
   ```bash
   npm install -g @angular/cli
   ```

3. **Check Environment Configuration**:
   Verify that the environment files (e.g., `environment.ts`) are correctly configured for your setup.

4. **Run the Development Server**:
   Once the above steps are completed, start the development server using:
   ```bash
   ng serve
   ```
   Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.


## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Deployment Process

To deploy the application, follow these steps:

1. **Build the Project for Production**:
   Run the following command to create a production-ready build:
   ```bash
   ng build --configuration production
   ```
   This will generate optimized files in the `dist/product-page` directory.

2. **Host the Build Files**:
   - Copy the contents of the `dist/product-page` directory to your web server's hosting directory.
   - Ensure the server is configured to serve the `index.html` file for all routes.

3. **Verify Deployment**:
   - Open your browser and navigate to your deployed application's URL.
   - Verify that the application is working as expected.

## Implementation Details

### Features Implemented
- **Header Component**:
  - Displays a toolbar with icons for shopping cart, search, and account.
  - Fully responsive and styled with Material Design.

- **Product List**:
  - Dynamically displays products fetched from an API.
  - Each product is rendered using the `ProductComponent`.

- **Product Component**:
  - Displays product details such as title, brand, price, rating, and availability status.
  - Includes action buttons for "Like" and "Add".

### API Integration
- The application fetches product data from the `https://dummyjson.com/products` API using the `ProductsService`.

### Responsive Design
- The layout adjusts dynamically for different screen sizes:
  - 4 products per row on desktops.
  - 3 products per row on tablets.
  - 2 products per row on mobile devices.

### Change Detection
- The `AppComponent` uses `ChangeDetectionStrategy.OnPush` for performance optimization.
- Explicit change detection is triggered using `ChangeDetectorRef` when the product list is updated.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
