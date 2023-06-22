import { MDXProvider } from '@mdx-js/react';
import ProfileContent from './profile.mdx';

const components = {
  // Define custom components here, if needed
};

function Profile() {
  return (
    <MDXProvider components={components}>
      <ProfileContent />
    </MDXProvider>
  );
}

export default Profile;
