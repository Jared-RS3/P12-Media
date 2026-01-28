# Gallery & Video Management Guide

## 🎬 Managing Your Showreel Section

The admin panel now allows you to manage both the main showreel video and gallery images.

## 📍 Access the Gallery Manager

1. Go to: `http://localhost:5173/admin` (or your domain + `/admin`)
2. Login with password: **`P12Media2024`**
3. Click on the **"Gallery & Video"** tab

---

## 🎥 Managing the Main Showreel Video

### Current Video

- The current video URL is displayed at the top
- Default: `/public/Show Reel .mov`

### To Update the Video:

1. **Upload your video file**:
   - Place your video file in the `/public/` folder
   - Example: `/public/my-showreel.mp4`

2. **Enter the path**:
   - In the "Main Showreel Video" section
   - Type the path: `/public/my-showreel.mp4`

3. **Click "Update Video"**
   - Your new video will replace the old one
   - Changes appear immediately on the website

### Supported Video Formats:

- `.mp4` (recommended)
- `.mov`
- `.webm`

---

## 🖼️ Managing Gallery Images

### Adding New Images

1. **Upload your image**:
   - Place image files in the `/public/` folder
   - Example: `/public/project-photo.jpg`

2. **Add to gallery**:
   - Enter the path in the "Add New Image" field
   - Example: `/public/project-photo.jpg`
   - Click the **"Add"** button

3. **Image appears immediately** in both:
   - Admin gallery grid
   - Public showreel gallery section

### Deleting Images

1. Hover over any image in the admin gallery grid
2. Click the **red trash icon** that appears
3. Confirm - the image is removed immediately
4. Changes are instant on the website

### Supported Image Formats:

- `.jpg` / `.jpeg`
- `.png`
- `.gif`
- `.webp`

---

## 📂 File Upload Instructions

### Step-by-Step:

1. **Locate your public folder**:

   ```
   project-30/
   └── public/
       ├── your-video.mp4     ← Put videos here
       ├── image1.jpg         ← Put images here
       └── image2.png
   ```

2. **Copy/Move your files** into the `public/` folder

3. **Reference them in admin** using:
   - `/public/filename.jpg`
   - `/public/video-name.mp4`

### Important Notes:

- Always start paths with `/public/`
- Use lowercase filenames without spaces
- Examples of good filenames:
  - ✅ `/public/project-sunset.jpg`
  - ✅ `/public/showreel-2024.mp4`
  - ❌ `/public/My Photo 2024.jpg` (has spaces)
  - ❌ `project.jpg` (missing /public/)

---

## 🔗 Using External URLs

You can also use images/videos hosted elsewhere:

```
https://example.com/my-video.mp4
https://your-cdn.com/images/photo.jpg
```

Just paste the full URL instead of `/public/filename`

---

## 📊 Gallery Features

### Image Grid:

- Shows all your gallery images
- Displays 2-4 columns (responsive)
- Hover to see delete button
- Click to view full size on website

### Video Section:

- Only one main video at a time
- Plays automatically on loop
- Muted by default
- Full responsive design

---

## 💾 Data Storage

- **Where**: Browser's localStorage
- **Persistence**: Survives page refreshes and browser restarts
- **Scope**: Per browser (won't sync across devices)
- **Backup**: Export your localStorage or keep a list of image URLs

---

## 🎨 Gallery Display on Website

### Video Tab:

- Shows your main showreel video
- Auto-plays on loop
- Stylish gradient border effect

### Gallery Tab:

- Grid of all your images
- Click any image to view enlarged
- Smooth animations and hover effects
- Empty state if no images added

---

## ⚡ Quick Tips

1. **Optimize your files**:
   - Videos: Under 50MB for fast loading
   - Images: Under 2MB each

2. **Best image sizes**:
   - Width: 1200-1920px
   - Maintain aspect ratio

3. **Organize your files**:
   - Create subfolders in `/public/`
   - Example: `/public/gallery/image1.jpg`

4. **Test before going live**:
   - Add/delete test images
   - Check how they appear on the site

---

## 🐛 Troubleshooting

### Image doesn't show:

- ✅ Check file path is correct
- ✅ Verify file is in `/public/` folder
- ✅ Check file extension matches
- ✅ Try refreshing the page

### Video won't play:

- ✅ Use `.mp4` format (best compatibility)
- ✅ Keep file size reasonable (<100MB)
- ✅ Check video isn't corrupted

### Changes not appearing:

- ✅ Click "Update Video" or "Add" button
- ✅ Refresh the main website
- ✅ Clear browser cache if needed

---

## 🚀 Best Practices

1. **Name files clearly**:
   - `client-project-2024.jpg` not `IMG_1234.jpg`

2. **Keep organized**:
   - Create folders: `/public/2024/`, `/public/clients/`

3. **Regular backups**:
   - Keep copies of your media files

4. **File size matters**:
   - Compress images before uploading
   - Use online tools like TinyPNG

---

## 📱 Mobile Responsive

- Gallery automatically adjusts for mobile
- 2 columns on phone, 3-4 on desktop
- Touch-friendly delete buttons
- Optimized image loading

---

## 🔐 Security Note

Same security considerations as contact details:

- Data stored in browser localStorage
- Anyone with admin password can manage
- Consider backend API for production

---

Need help? Contact your developer or refer to the main ADMIN_GUIDE.md!
