# Quick Setup Guide

## 🚀 Getting Your Website Live

### Option 1: Basic Hosting (Recommended for Start)
1. **Choose a hosting provider** (SiteGround, Bluehost, or local Sri Lankan providers)
2. **Upload files** via FTP or hosting panel file manager
3. **Point your domain** to the hosting account
4. **Test the website** on your domain

### Option 2: Advanced Hosting
1. **Use cloud hosting** (AWS, Google Cloud, or DigitalOcean)
2. **Set up SSL certificate** for HTTPS
3. **Configure CDN** for better performance
4. **Enable caching** and compression

## 📧 Contact Form Setup

Your contact form currently shows a demo message. To make it functional:

### Option 1: Simple Email Forwarding
```php
<?php
// contact-handler.php
if ($_POST) {
    $to = "contact@buisbuild.lk";
    $subject = "New Contact Form Submission";
    $message = "Name: " . $_POST['firstName'] . " " . $_POST['lastName'] . "\n";
    $message .= "Email: " . $_POST['email'] . "\n";
    $message .= "Message: " . $_POST['message'];
    
    mail($to, $subject, $message);
    echo json_encode(['success' => true]);
}
?>
```

### Option 2: Using EmailJS (No Server Required)
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email template
3. Add EmailJS script to your contact page
4. Update the form submission handler

### Option 3: Professional Solutions
- **Formspree**: Easy form backend service
- **Netlify Forms**: If hosting on Netlify
- **Google Forms**: Embed or redirect option

## 🎨 Customization Guide

### Colors
Edit `assets/css/styles.css` and update these variables:
```css
:root {
    --primary-blue: #00A6ED;    /* Your main blue */
    --primary-green: #72C144;   /* Your main green */
    --secondary-blue: #0082be;  /* Darker blue */
}
```

### Content
- Update contact information in all HTML files
- Replace placeholder text with your actual content
- Add your real phone numbers and email addresses

### Images
1. Create a `favicon.ico` file and place in `assets/images/`
2. Add team photos and replace the gray placeholder circles
3. Add company logo if needed
4. Optimize all images for web (use WebP format if possible)

## 📱 Testing Checklist

### Before Going Live
- [ ] Test on mobile devices (iPhone, Android)
- [ ] Test on different browsers (Chrome, Firefox, Safari)
- [ ] Check all links work correctly
- [ ] Test contact form submission
- [ ] Verify phone and email links work
- [ ] Check loading speed (aim for under 3 seconds)
- [ ] Validate HTML at [W3C Validator](https://validator.w3.org/)

### After Going Live
- [ ] Set up Google Analytics
- [ ] Submit to Google Search Console
- [ ] Test from different locations
- [ ] Monitor for 404 errors
- [ ] Check mobile performance

## 🔧 Maintenance Tasks

### Weekly
- Check contact form is working
- Monitor website uptime
- Review any contact submissions

### Monthly
- Check for broken links
- Review analytics data
- Update content if needed
- Check security updates

### Quarterly
- Full backup of website
- Performance audit
- SEO review and updates
- Security scan

## 📞 Need Help?

If you need assistance with:
- **Technical setup**: Contact your web hosting provider
- **Design changes**: Refer to the CSS documentation in README.md
- **Content updates**: Edit the HTML files directly
- **Advanced features**: Consider hiring a web developer

## 🚀 Going Beyond Basic

### Additional Features You Might Want
1. **Blog/News Section**: Add a simple blog for SEO benefits
2. **Online Booking**: Integrate calendar booking system
3. **Live Chat**: Add customer support chat
4. **Social Media Integration**: Add social sharing buttons
5. **Email Newsletter**: Integrate with MailChimp or similar
6. **Client Portal**: Secure area for existing clients
7. **Online Payments**: Accept payments for consultations

### Performance Improvements
1. **Image Optimization**: Use WebP format and lazy loading
2. **Caching**: Set up browser and server caching
3. **CDN**: Use CloudFlare or similar service
4. **Minification**: Compress CSS and JavaScript files

---

**Success Tips:**
- Start simple and add features gradually
- Always test changes before making them live
- Keep regular backups of your website
- Monitor your website's performance regularly
- Focus on user experience over fancy features