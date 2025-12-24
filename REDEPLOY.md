# Commit and Redeploy Instructions

1. **Add all changes:**
   ```
   git add .
   ```
2. **Commit your changes:**
   ```
   git commit -m "Add Vercel AI Gateway integration and demo script"
   ```
3. **Push to GitHub:**
   ```
   git push
   ```
4. **Redeploy on Vercel:**
   - Vercel will automatically redeploy on push.
   - Or, trigger a redeploy from your Vercel dashboard.

---

**To test the AI Gateway integration locally:**

1. Set your API key in `.env`.
2. Run:
   ```
   npm run ai-gateway-demo
   ```

You should see your API key printed (or an error if not set).
