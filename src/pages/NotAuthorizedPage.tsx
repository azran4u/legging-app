import NotAuthorizedComponent from '../components/NotAuthorizedComponent';

export default function NotAuthorizedPage() {
  return <NotAuthorizedComponent logout={() => console.log('logout')} />;
}
