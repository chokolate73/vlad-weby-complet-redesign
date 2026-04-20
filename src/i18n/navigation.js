import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

// Locale-aware replacements for next/link, next/navigation.
// Use these when emitting URLs so SK uses root-level paths and
// EN/DE/RU get their /<locale> prefix + localized slug.
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
