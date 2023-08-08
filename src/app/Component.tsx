"use client";

import {
  Flex,
  Text,
  Button,
  Heading,
  Box,
  Avatar,
  Badge,
  Link,
  Tooltip,
  Tabs,
  Switch,
  Grid,
  Dialog,
  TextField,
  AspectRatio,
  ThemeOptions,
} from "@radix-ui/themes";
import { useState } from "react";

type Props = {
  appearance: ThemeOptions["appearance"]
  setAppearance: (theme: ThemeOptions["appearance"]) => void;
}

export function Component({ appearance, setAppearance }: Props) {
  const [following, setFollowing] = useState(false);
  return (
    <Box>
      <Flex p="6" direction="column" gap="2">
        <Flex justify="between" mb="2">
          <Button variant="ghost">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
                fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
            </svg>
            Back
          </Button>
          <Switch size="1" variant="soft" checked={appearance === "light"}
                  onCheckedChange={() => setAppearance(appearance === "light" ? "dark" : "light")} />
        </Flex>
        <Flex justify="between" align="center" gap="4" pt="2">
          <Flex direction="column" gap="1">
            <Heading size="6">Chris Nicholas</Heading>
            <Flex justify="start" align="baseline" gap="1">
              <Text size="3" color="gray">@ctnicholasdev</Text>
              <Badge color="gray" size="1">Follows you</Badge>
            </Flex>
          </Flex>
          <Avatar size="5" fallback={<>C</>}
                  src="https://pbs.twimg.com/profile_images/1401194362927816708/0c3yTtri_400x400.jpg" />
        </Flex>
        <Text size="3">
          Developer experience <Link>@liveblocks</Link>
        </Text>

        <Flex align="center" gap="1">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.51194 3.00541C9.18829 2.54594 10.0435 2.53694 10.6788 2.95419C10.8231 3.04893 10.9771 3.1993 11.389 3.61119C11.8009 4.02307 11.9513 4.17714 12.046 4.32141C12.4633 4.95675 12.4543 5.81192 11.9948 6.48827C11.8899 6.64264 11.7276 6.80811 11.3006 7.23511L10.6819 7.85383C10.4867 8.04909 10.4867 8.36567 10.6819 8.56093C10.8772 8.7562 11.1938 8.7562 11.389 8.56093L12.0077 7.94221L12.0507 7.89929C12.4203 7.52976 12.6568 7.2933 12.822 7.0502C13.4972 6.05623 13.5321 4.76252 12.8819 3.77248C12.7233 3.53102 12.4922 3.30001 12.1408 2.94871L12.0961 2.90408L12.0515 2.85942C11.7002 2.508 11.4692 2.27689 11.2277 2.11832C10.2377 1.46813 8.94398 1.50299 7.95001 2.17822C7.70691 2.34336 7.47044 2.57991 7.1009 2.94955L7.058 2.99247L6.43928 3.61119C6.24401 3.80645 6.24401 4.12303 6.43928 4.31829C6.63454 4.51355 6.95112 4.51355 7.14638 4.31829L7.7651 3.69957C8.1921 3.27257 8.35757 3.11027 8.51194 3.00541ZM4.31796 7.14672C4.51322 6.95146 4.51322 6.63487 4.31796 6.43961C4.12269 6.24435 3.80611 6.24435 3.61085 6.43961L2.99213 7.05833L2.94922 7.10124C2.57957 7.47077 2.34303 7.70724 2.17788 7.95035C1.50265 8.94432 1.4678 10.238 2.11799 11.2281C2.27656 11.4695 2.50766 11.7005 2.8591 12.0518L2.90374 12.0965L2.94837 12.1411C3.29967 12.4925 3.53068 12.7237 3.77214 12.8822C4.76219 13.5324 6.05589 13.4976 7.04986 12.8223C7.29296 12.6572 7.52943 12.4206 7.89896 12.051L7.89897 12.051L7.94188 12.0081L8.5606 11.3894C8.75586 11.1941 8.75586 10.8775 8.5606 10.6823C8.36533 10.487 8.04875 10.487 7.85349 10.6823L7.23477 11.301C6.80777 11.728 6.6423 11.8903 6.48794 11.9951C5.81158 12.4546 4.95642 12.4636 4.32107 12.0464C4.17681 11.9516 4.02274 11.8012 3.61085 11.3894C3.19896 10.9775 3.0486 10.8234 2.95385 10.6791C2.53661 10.0438 2.54561 9.18863 3.00507 8.51227C3.10993 8.35791 3.27224 8.19244 3.69924 7.76544L4.31796 7.14672ZM9.62172 6.08558C9.81698 5.89032 9.81698 5.57373 9.62172 5.37847C9.42646 5.18321 9.10988 5.18321 8.91461 5.37847L5.37908 8.91401C5.18382 9.10927 5.18382 9.42585 5.37908 9.62111C5.57434 9.81637 5.89092 9.81637 6.08619 9.62111L9.62172 6.08558Z"
              fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
          </svg>

          <Text size="3">
            <Link>
              ctnicholas.dev</Link>
          </Text>
        </Flex>

        <Grid gap="2" my="1" columns="2">
          <Tooltip content="Follow Chris">
            <Button size="2" variant={following ? "outline" : "classic"}
                    onClick={() => setFollowing(!following)}>{following ? "Unfollow" : "Follow"}</Button>
          </Tooltip>
          <GroupDialog />
        </Grid>

        <Tabs.Root defaultValue="account">
          <Tabs.List>
            <Tabs.Trigger value="account">Messages</Tabs.Trigger>
            <Tabs.Trigger value="settings">Content</Tabs.Trigger>
            <Tabs.Trigger value="documents">Favourites</Tabs.Trigger>
          </Tabs.List>

          <Flex pt="4" gap="2">
            <Tabs.Content value="account" asChild>
              <Flex gap="4" direction="column">

                <Flex gap="3">
                  <Avatar size="3" fallback={<>C</>}
                          src="https://pbs.twimg.com/profile_images/1401194362927816708/0c3yTtri_400x400.jpg" />
                  <Flex direction="column">
                    <Flex gap="1" align="baseline">
                      <Heading size="3">Chris Nicholas</Heading>
                      <Text size="2" color="gray">@ctnicholasdev</Text>
                    </Flex>
                    <Text size="2">Top work.</Text>
                  </Flex>
                </Flex>

                <Flex gap="3">
                  <Avatar size="3" fallback={<>C</>}
                          src="https://pbs.twimg.com/profile_images/1401194362927816708/0c3yTtri_400x400.jpg" />
                  <Flex direction="column">
                    <Flex gap="1" align="baseline">
                      <Heading size="3">Chris Nicholas</Heading>
                      <Text size="2" color="gray">@ctnicholasdev</Text>
                    </Flex>
                    <Text size="2">Proper theming and everything!</Text>
                  </Flex>
                </Flex>


                <Flex gap="3">
                  <Avatar size="3" fallback={<>C</>}
                          src="https://pbs.twimg.com/profile_images/1401194362927816708/0c3yTtri_400x400.jpg" />
                  <Flex direction="column">
                    <Flex gap="1" align="baseline">
                      <Heading size="3">Chris Nicholas</Heading>
                      <Text size="2" color="gray">@ctnicholasdev</Text>
                    </Flex>
                    <Text size="2">This Radix thing is alright.</Text>
                  </Flex>
                </Flex>


                <Flex gap="3" align="stretch">
                  <Avatar size="3" fallback={<>C</>}
                          src="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png" />
                  <Flex direction="column">
                    <Flex gap="1" align="baseline">
                      <Heading size="3">Radix</Heading>
                      <Text size="2" color="gray">@radix_ui</Text>
                    </Flex>
                    <Text size="2">🎉 Announcing Radix Themes…</Text>
                    <Flex mt="2">
                      <AspectRatio ratio={3 / 2}>
                        <img
                          src="https://images.unsplash.com/photo-1479030160180-b1860951d696?&auto=format&fit=crop&w=1200&q=80"
                          alt="A house in a forest"
                          style={{
                            objectFit: "cover",
                            width: "100%",
                            height: "100%",
                            borderRadius: "var(--radius-2)",
                          }}
                        />
                      </AspectRatio>
                    </Flex>
                  </Flex>
                </Flex>

              </Flex>
            </Tabs.Content>

            <Tabs.Content value="documents">
              <Text size="2">Access and update your documents.</Text>
            </Tabs.Content>

            <Tabs.Content value="settings">
              <Text size="2">Edit your profile or update contact information.</Text>
            </Tabs.Content>
          </Flex>
        </Tabs.Root>
      </Flex>
    </Box>
  );
}

function GroupDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Tooltip content="Add to group">
          <Button size="2" variant="soft">Add to group</Button>
        </Tooltip>
      </Dialog.Trigger>

      <Dialog.Content style={{ maxWidth: 450 }}>
        <Dialog.Title>Add user to group</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Add this user to a custom user group.
        </Dialog.Description>

        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Group Name
            </Text>
            <TextField.Input
              defaultValue="Engineers"
              placeholder="Enter group name"
            />
          </label>
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button>Save</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}

