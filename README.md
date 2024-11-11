# **Property Pulse**

> A sleek and efficient web application designed to help you find your next rental property.

This project is part of the **[Next 14 From Scratch Course](https://www.traversymedia.com/nextjs-from-scratch)** by Traversy Media, offering a comprehensive approach to building modern web applications. This second iteration of Property Pulse replaces API routes with Next.js server actions for optimized performance.

<div align="center">
  <img src="/public/images/screen.jpg" alt="Property Pulse Screenshot"/>
</div>

---

## **Features**

Property Pulse is packed with powerful features to streamline your rental property search:

- ✅ **User Authentication** – Secure login via Google & NextAuth.
- ✅ **Authorization & Route Protection** – Access control for enhanced security.
- ✅ **User Profile** – Manage user listings directly.
- ✅ **Property Listing CRUD** – Full control over property listings.
- ✅ **Image Upload** – Upload multiple property images.
- ✅ **Property Search** – Find properties that match your criteria.
- ✅ **Messaging with Unread Notifications** – Keep track of property inquiries.
- ✅ **Photoswipe Image Gallery** – Browse property images seamlessly.
- ✅ **Mapbox Integration** – Interactive map view of property locations.
- ✅ **Toast Notifications** – Real-time feedback on actions.
- ✅ **Property Bookmarking** – Save properties for later.
- ✅ **Social Media Sharing** – Share listings on social platforms.
- ✅ **Loading Spinners** – Smooth and user-friendly loading experience.
- ✅ **Responsive Design** – Fully optimized for mobile and desktop.
- ✅ **Custom 404 Page** – Unique experience for unavailable routes.
- ✅ **Next.js Actions** – Enhanced performance with server actions.

---

## **Tech Stack**

Property Pulse leverages a range of cutting-edge technologies to deliver a modern, responsive experience:

- **Frontend:** [Next.js](https://nextjs.org/), [React](https://reactjs.org/), [Tailwind CSS](https://tailwindcss.com/)
- **Database:** [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
- **Authentication:** [NextAuth.js](https://next-auth.js.org/)
- **UI Enhancements:** [React Icons](https://react-icons.github.io/react-icons/), [Photoswipe](https://photoswipe.com/)
- **Image Management:** [Cloudinary](https://cloudinary.com/)
- **Maps & Geocoding:** [Mapbox](https://www.mapbox.com/), [React Map GL](https://visgl.github.io/react-map-gl/), [React Geocode](https://www.npmjs.com/package/react-geocode)
- **UI Components:** [React Spinners](https://www.npmjs.com/package/react-spinners), [React Toastify](https://fkhadra.github.io/react-toastify/), [React Share](https://www.npmjs.com/package/react-share)

---

## **Getting Started**

### **Prerequisites**

To set up Property Pulse, you’ll need the following accounts and credentials:

- **Node.js** – version 18 or higher
- **MongoDB Atlas** – [Create a cluster here](https://www.mongodb.com/)
- **Cloudinary** – [Sign up here](https://cloudinary.com/)
- **Google Cloud Console** – [Set up here](https://console.cloud.google.com/)
- **Mapbox** – [Sign up here](https://www.mapbox.com/)

### **Environment Variables**

Rename the `env.example` file to `.env` and populate it with your credentials:

- `MONGODB_URI`: MongoDB connection string from MongoDB Atlas
- `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`: Google credentials
- `NEXTAUTH_SECRET`: Secret key for NextAuth (generate using `openssl rand -base64 32`)
- `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`: Cloudinary credentials
- `NEXT_PUBLIC_MAPBOX_TOKEN`: Mapbox token
- `NEXT_PUBLIC_GOOGLE_GEOCODING_API_KEY`: Google Geocoding API key

### **Installation**

Install the dependencies:

```bash
npm install
