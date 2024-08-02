export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About Thabo Bester
          </h1>
          <div className='text-md flex flex-col gap-6'>
            <p>
              Welcome to Bester&apos;s Blog! This blog was created by Thabo Bester
              as a personal project to share his thoughts and ideas with the
              world. 
            </p>

            <p>
              On this blog, you&apos;ll find weekly articles on topics
              related to my case and the truth.
            </p>

            <p>
              We encourage you to leave comments on our posts and engage with
              other readers. You can like other people&apos;s comments and reply to
              them as well. We believe that a community of readers can help
              us spread the truth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
