export const topLinks = [
  { label: "회사소개", href: "#" },
  { label: "공지사항", href: "#notice" },
  { label: "고객센터", href: "#" },
  { label: "보유기술", href: "#" },
];

export const navGroups = [
  {
    title: "ABOUT US",
    items: ["회사소개", "인사말", "오시는길"],
  },
  {
    title: "BUSINESS",
    items: ["보유기술"],
  },
  {
    title: "회사실적",
    items: ["공사실적", "주요실적"],
  },
  {
    title: "지식산업권 외",
    items: ["인증서"],
  },
  {
    title: "고객센터",
    items: ["공지사항", "온라인문의"],
  },
];

export const heroSlides = [
  {
    id: 1,
    title: "환경을 우선하는 정화기술",
    subtitle: "녹색환경의 선두주자",
    gradient: "linear-gradient(135deg, #0a4d32 0%, #1a8f5c 50%, #2cb573 100%)",
  },
  {
    id: 2,
    title: "수처리·에너지화 솔루션",
    subtitle: "현장에 최적화된 혁신 기술",
    gradient: "linear-gradient(135deg, #063d28 0%, #147a4a 60%, #3d9e6e 100%)",
  },
  {
    id: 3,
    title: "축산폐수 4무 정화공법",
    subtitle: "자체 기술력과 풍부한 현장 경험",
    gradient: "linear-gradient(135deg, #0d5c3a 0%, #1e6b48 40%, #4aab7a 100%)",
  },
];

export const noticeItem = {
  title: "한화그린 홈페이지 리뉴얼",
  date: "04-11",
};

export const introCards = [
  {
    icon: "building",
    title: "회사소개",
    desc: "한화그린은 환경을 우선으로\n최적화된 새로운 정화기술을 제시합니다.",
    href: "#",
  },
  {
    icon: "chart",
    title: "공사실적",
    desc: "한화그린은 다양한 수처리, 에너지화 현장에\n최적화된 혁신적인 기술과 솔루션을 제시합니다.",
    href: "#",
  },
  {
    icon: "gear",
    title: "보유기술",
    desc: "한화그린은 많은 현장경험으로\n자체 기술력을 보유하고 있습니다.",
    href: "#",
  },
];

export const areaTabs = [
  {
    id: "about",
    label: "회사소개",
    icon: "building",
    title: "한화그린은 환경을 우선으로",
    body: "최적화된 새로운 정화기술을 제시합니다.",
  },
  {
    id: "works",
    label: "공사실적",
    icon: "chart",
    title: "다양한 수처리·에너지화 현장",
    body: "최적화된 혁신적인 기술과 솔루션을 제시합니다.",
  },
  {
    id: "tech",
    label: "보유기술",
    icon: "gear",
    title: "풍부한 현장 경험",
    body: "자체 기술력을 보유하고 있습니다.",
  },
  {
    id: "portfolio",
    label: "주요실적",
    icon: "award",
    title: "한화그린 주요실적",
    body: "주요실적 현황을 확인하세요.",
  },
];

export const galleryItems = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  title: `현장 실적 ${String(i + 1).padStart(2, "0")}`,
  hue: 140 + i * 8,
}));

export const certificates = [
  { id: 1, title: "안전보건경영시스템인증서" },
  { id: 2, title: "품질경영시스템 인증서" },
  { id: 3, title: "환경경영시스템인증서" },
  { id: 4, title: "환경전문공사업 등록증" },
  { id: 5, title: "건설업등록증" },
  { id: 6, title: "벤처기업확인서" },
];

export const promoVideos = [
  {
    id: 1,
    title: "한화그린 농장폐수 농업기술 폐수처리 하수처리 액비화",
  },
  {
    id: 2,
    title:
      "[채영국의 한돈사랑TV - 현장검증기] 한돈농가 최대숙원! 악취문제 전격해결!",
  },
];

export const notices = [
  { id: 1, title: "한화그린 홈페이지 리뉴얼", date: "04-11" },
];

export const footerInfo = {
  address: "경북 칠곡군 가산면 송학5길 57-1",
  email: "hanwhagreen@hanmail.net",
  phone: "054-977-4700",
  hours: "월~금 07:30 ~ 16:30",
};
