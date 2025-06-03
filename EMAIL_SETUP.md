# 📧 Email Setup Guide for Contact Form

Your contact form is now configured to send emails to `sachinchourasiya.c.123@gmail.com` when someone submits the form. Follow these steps to set up email functionality.

## 🔧 Gmail Setup (Free)

### Step 1: Enable 2-Factor Authentication
1. Go to your Google Account settings
2. Navigate to "Security"
3. Enable "2-Step Verification" if not already enabled

### Step 2: Generate App Password
1. In Google Account settings, go to "Security"
2. Under "2-Step Verification", click "App passwords"
3. Select "Mail" and "Other (custom name)"
4. Enter "Portfolio Contact Form" as the name
5. Click "Generate"
6. **Copy the 16-character password** (you'll need this)

### Step 3: Set Environment Variables in Netlify

After deploying to Netlify:

1. Go to your Netlify site dashboard
2. Navigate to "Site settings" > "Environment variables"
3. Add these variables:

```
EMAIL_USER = sachinchourasiya.c.123@gmail.com
EMAIL_PASS = [your-16-character-app-password]
```

**Important:** Use the App Password, NOT your regular Gmail password!

## 🚀 How It Works

When someone fills out your contact form:

1. ✅ Form data is validated
2. ✅ Email is sent to `sachinchourasiya.c.123@gmail.com`
3. ✅ Email includes:
   - Sender's name and email
   - Subject line
   - Full message
   - Timestamp
   - Reply-to address (so you can reply directly)

## 📧 Email Template

You'll receive emails that look like this:

```
Subject: Portfolio Contact: [Their Subject]

New Contact Form Submission

Contact Details:
Name: John Doe
Email: john@example.com
Subject: Interested in your services

Message:
Hi Sachin, I saw your portfolio and I'm interested in discussing a project...

This email was sent from your portfolio contact form on [timestamp]
```

## 🔒 Security Features

- ✅ Input validation and sanitization
- ✅ CORS protection
- ✅ Environment variables for sensitive data
- ✅ App passwords instead of main password
- ✅ Reply-to functionality for easy responses

## 🛠 Troubleshooting

### Email Not Sending?
1. Check Netlify function logs for errors
2. Verify environment variables are set correctly
3. Ensure App Password is correct (16 characters, no spaces)
4. Check Gmail account has 2FA enabled

### Still Not Working?
1. Test the contact form after deployment
2. Check Netlify Functions logs in dashboard
3. Verify your Gmail settings allow "Less secure app access" (if needed)

## 🔄 Alternative Free Email Services

If Gmail doesn't work, you can also use:

### Outlook/Hotmail (Free)
```
service: 'hotmail'
```

### Yahoo Mail (Free)
```
service: 'yahoo'
```

Just update the service name in the Netlify function and use the corresponding email credentials.

## 📱 Testing

After setup:
1. Deploy your site to Netlify
2. Fill out the contact form on your live site
3. Check your email inbox
4. Verify you can reply directly to the sender

Your contact form will now send you email notifications for every submission! 🎉
