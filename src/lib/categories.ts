export const CATEGORY_META = {
  sabah: {
    label: 'Sabah',
    description:
      'North Borneo, colonial history, WWII, the formation of Malaysia, and local places, people and forgotten events.',
  },
  'southeast-asia': {
    label: 'Southeast Asia',
    description:
      'Malaya and Malaysia, Singapore, Brunei, Indonesia, the Philippines, and regional decolonisation.',
  },
  'war-and-conflict': {
    label: 'War & Conflict',
    description: 'WWII, occupation, resistance, Konfrontasi, and POW stories.',
  },
  'dark-history': {
    label: 'Dark History',
    description:
      'Atrocities, disasters, occupation, massacres and political violence, presented with care rather than sensationalism.',
  },
} as const;

export type CategorySlug = keyof typeof CATEGORY_META;

export const STATUS_META = {
  notes: { label: 'Research notes', color: 'var(--color-signal-counterfactual)' },
  draft: { label: 'Draft', color: 'var(--color-signal-disputed)' },
  'fact-check': { label: 'Fact-checking', color: 'var(--color-signal-political)' },
  reviewed: { label: 'Reviewed', color: 'var(--color-signal-interpretation)' },
  published: { label: 'Published', color: 'var(--color-signal-fact)' },
} as const;
