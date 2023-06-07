export default {
  name: 'pageInfo',
  title: 'Page Info',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {name: 'role', title: 'Role', type: 'string'},
    {
      name: 'heroImage',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'backgroundInformation',
      title: 'Background Info',
      type: 'text',
    },
    {
      name: 'profilePic',
      title: 'Profile Pic',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'socials',
      title: 'Socials',
      type: 'array',
      of: [{type: 'reference', to: {type: 'social'}}],
    },
  ],
}
