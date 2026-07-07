import { profile, stack, experience, education } from './data/profile';
import { projects } from './data/projects';
import Layout from './components/Layout';

export default function App() {
  return (
    <Layout
      profile={profile}
      projects={projects}
      stack={stack}
      experience={experience}
      education={education}
    />
  );
}
