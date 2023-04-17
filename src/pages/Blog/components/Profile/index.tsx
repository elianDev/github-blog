import {
  ProfileContainer,
  ProfileDetailsContainer,
  ProfileInfoContainer,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { api } from "../../../../lib/axios";
import { useEffect, useState } from "react";
import Loading from "../../../../components/Loading";

const username = "elianDev";

interface ProfileType {
  login: string;
  bio: string;
  html_url: string;
  name: string;
  company: string | null;
  followers: number | undefined;
  avatar_url: string;
}

interface ProfileProps {
  loading: boolean;
}

const Profile = ({ loading }: ProfileProps) => {
  const [profile, setProfile] = useState<ProfileType>();

  async function fetchUser() {
    const response = await api.get(`users/${username}`);

    setProfile(response.data);
  }

  useEffect(() => {
    fetchUser();
  }, []);

  const followersBiggerThen1 =
    profile?.followers === undefined || profile.followers <= 1;

  if (loading) return <Loading />;
  return (
    <ProfileContainer>
      <img src={profile?.avatar_url} alt="" />

      <ProfileInfoContainer>
        <div>
          <h1>{profile?.name}</h1>
          <a href={profile?.html_url} target="_blank">
            Github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
          </a>
        </div>

        <p>{profile?.bio}</p>
      </ProfileInfoContainer>
      <ProfileDetailsContainer>
        <li>
          <FontAwesomeIcon icon={faGithub} />
          {profile?.login}
        </li>
        {profile?.company !== null && (
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            {profile?.company}
          </li>
        )}

        <li>
          <FontAwesomeIcon icon={faUserGroup} />
          {followersBiggerThen1
            ? `${profile?.followers} seguidor`
            : `${profile?.followers === undefined && "0"} seguidores`}
        </li>
      </ProfileDetailsContainer>
    </ProfileContainer>
  );
};

export default Profile;
