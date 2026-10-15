Design tokens and layout spec — Busco

1) Color palette
- Primary (blue)        : #2563EB
- Accent (green)        : #10B981
- Surface light         : #FFFFFF
- Background            : #F7F9FB
- Muted text            : #6B7280
- Surface-2 (cards)     : #F3F4F6
- Danger                : #EF4444
- Subtle border         : #E6EEF8
- Shadow (base)         : rgba(15,23,42,0.06)

2) Typography
- Font stack: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial
- Headline / Brand: 20-28px, 700
- H2/H3: 18px / 16px, 600
- Body: 14px / 16px, 400
- Small: 12px, 400
- Line-height: 1.3–1.5 depending on context

3) Spacing scale (base = 8px)
- xs = 4px
- sm = 8px
- md = 16px
- lg = 24px
- xl = 32px
- container horizontal padding: 24px
- card padding: 16px

4) Radii / Elevation
- Radius small: 8px
- Radius default: 12px
- Card shadow: 0 6px 18px rgba(15,23,42,0.06)
- Elevated shadow (hover): 0 12px 30px rgba(2,6,23,0.08)

5) Components (measurements)
- Topbar: height = 64px (desktop). Inner padding 16px. Brand left margin 16px.
- Search inputs: height = 40px; border-radius = 10px; horizontal padding = 12px.
- Primary button: height = 40px; padding 10px 16px; border-radius = 10-12px.
- Trip card: padding 12px; margin-top 12px; border-radius 10px; min-height 64px.
- Map panel: height desktop = 360px; mobile = 220px; border-radius 12px.
- Phone frame: width 375px, padding 16px, radius 28px.

6) Grid
- Desktop main area: 2-column layout: left = 1fr, right = 380px.
- Mobile: single column, stacked.

7) Accessibility
- Focus states: 2px outline in primary color with 3px offset or inset shadow
- Color contrast: ensure primary text >= AA on white; use dark navy (#0F172A) for main text

8) Iconography & spacing
- Icon sizes: 16px (small), 20px (medium), 28px (large)
- Touch targets >=44px

9) Example Figma constraints
- Frame: Desktop 1366x768
- Grid: 12 columns, gutter 16px, margin 24px
- Use auto-layout groups for trip cards (horizontal, space-between) and repeating lists
- Components to create in Figma: Topbar, Search input, TripCard, StopList, MapFrame, AdminCard (form), TableRow

Notes:
- To reproduce exact look use CSS gradients for topbar and subtle map backgrounds.
- Use vector pins or built-in icons for stop markers; color pins primary/accent.
