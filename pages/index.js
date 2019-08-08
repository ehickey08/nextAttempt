import Link from 'next/link'

const Index = () => (
    <>
        <div>Hell from index page</div>
        <div>you are in mydomain.com or mydomain.com/index url</div>
        <Link href="/about">About Page</Link>
    </>
);

export default Index;
