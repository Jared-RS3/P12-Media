# P12 Media - Admin Panel Guide

## 🔐 Accessing the Admin Panel

1. Navigate to: `http://localhost:5173/admin` (or `https://yourdomain.com/admin` in production)
2. Enter the password: **`P12Media2024`**
3. Click "Access Admin Panel"

## 📝 Managing Contact Details

Once logged in, you can update:

- **Email Address** - Will appear in both Footer and Contact sections
- **Phone Number** - Will appear in both Footer and Contact sections
- **Address** - Will appear in both Footer and Contact sections

### Steps to Update:

1. Edit any of the three fields with your new information
2. Click the **"Save Changes"** button
3. You'll see a success message confirming the save
4. Navigate back to the main site to see your changes reflected

## 🔄 Where Changes Appear

Your updated contact details will automatically show in:

- **Footer Section** - Bottom of every page
- **Contact Section** - In the "Get in touch" box

## 🔒 Security

- Password is currently: `P12Media2024`
- To change the password, edit the file: `src/components/AdminLogin.tsx`
- Look for the line: `const ADMIN_PASSWORD = "P12Media2024";`
- Change it to your desired password

## 💾 Data Storage

- Contact details are stored in your browser's **localStorage**
- Data persists even after closing the browser
- Each browser stores its own copy (not shared across devices)
- For multi-device management, you would need to set up a backend API

## 🚀 Tips

- Always click "Save Changes" after editing
- Changes are immediate - no page refresh needed
- Use the "Logout" button to exit the admin panel
- Click "← Back to Home" on login screen to return to main site

## ⚠️ Production Notes

For a production environment, consider:

1. Moving the password to environment variables
2. Setting up a backend API for authentication
3. Adding session management
4. Using a database instead of localStorage
5. Adding user roles and permissions

---

**Need help?** Contact your developer for assistance with advanced configurations.
