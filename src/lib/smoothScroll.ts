// Utility function to handle smooth scrolling
export const scrollToElement = (elementId: string, offset = 0) => {
  const element = document.getElementById(elementId);

  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

// Get all section IDs in order
const getSectionIds = (): string[] => {
  const sections = Array.from(
    document.querySelectorAll("section[id]")
  ) as HTMLElement[];
  return sections
    .sort((a, b) => a.offsetTop - b.offsetTop)
    .map((section) => section.id);
};

// Find the current section based on scroll position
const getCurrentSectionIndex = (): number => {
  const sectionIds = getSectionIds();
  const scrollPosition = window.scrollY + window.innerHeight / 2;
  const sections = sectionIds
    .map((id) => document.getElementById(id))
    .filter((s): s is HTMLElement => s !== null);

  for (let i = sections.length - 1; i >= 0; i--) {
    const section = sections[i];
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;

    if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
      return i;
    }
  }

  // If we're before the first section
  if (sections.length > 0 && scrollPosition < sections[0].offsetTop) {
    return 0;
  }

  // If we're after the last section
  return sections.length - 1;
};

// Custom hook to intercept anchor clicks and apply smooth scrolling
export const initSmoothScrolling = (): void => {
  // Don't run during SSR
  if (typeof window === "undefined") return;

  // Handle arrow key navigation
  document.addEventListener("keydown", (e) => {
    // Only handle arrow keys if we're not in an input or textarea
    const target = e.target as HTMLElement | null;
    if (
      target &&
      (target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable)
    ) {
      return;
    }

    const sectionIds = getSectionIds();
    const currentIndex = getCurrentSectionIndex();

    if (e.key === "ArrowDown" && currentIndex < sectionIds.length - 1) {
      e.preventDefault();
      const nextSection = sectionIds[currentIndex + 1];
      scrollToElement(nextSection, 80);
      window.history.pushState({}, "", `#${nextSection}`);
    } else if (e.key === "ArrowUp" && currentIndex > 0) {
      e.preventDefault();
      const prevSection = sectionIds[currentIndex - 1];
      scrollToElement(prevSection, 80);
      window.history.pushState({}, "", `#${prevSection}`);
    }
  });

  document.addEventListener("click", (e) => {
    // Find closest anchor element
    const target = e.target as HTMLElement | null;
    const anchor = target?.closest("a") as HTMLAnchorElement | null;

    // If it's an anchor and it links to an ID on the current page
    if (
      anchor &&
      anchor.href &&
      anchor.href.includes(window.location.origin) &&
      anchor.hash
    ) {
      const targetId = anchor.hash.substring(1); // Remove the # character
      const targetElement = document.getElementById(targetId);

      // If the target element exists on the page
      if (targetElement) {
        e.preventDefault();
        scrollToElement(targetId, 80);
        window.history.pushState({}, "", anchor.hash);
      }
    }
  });
};

// Function to handle smooth scrolling for buttons
export const handleSmoothScroll = (
  e: React.MouseEvent<HTMLAnchorElement>,
  targetId: string,
  offset = 80
) => {
  e.preventDefault();
  scrollToElement(targetId, offset);
};
