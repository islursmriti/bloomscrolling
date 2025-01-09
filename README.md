**Steps to run the bloom website locally**

1. Clone the repo or download and extract the zip file to bloom-website folder. 
2. Ensure that npm is installed and working properly on your computer.
3. Run npm i --legacy-peer-deps
4. Run npm run dev
The website will run in localhost:3000

**Steps I took to deploy website to AWS s3**

1. Made a s3 bucket named bloomscrolling
2. Ran npm run build on my pc and got the out folder.
3. Ran aws s3 sync ./out s3://bloomscrolling/  which copied all contents of out folder to the bucket. 
4. Enabled static website hosting on the bucket, created a bucket policy, and obtained the link to the hosted site.
5. The site can now be accessed at - http://bloomscrolling.s3-website.ap-south-1.amazonaws.com/
6. During deployment, I noticed that the Partner and Invest pages were not correctly added to their respective folders. To resolve this, I manually created the necessary folders in the S3 bucket and added the corresponding HTML files.

