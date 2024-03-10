import type { ColorMode } from '../store';

export const appendScript = (id: string, consent: boolean = false) => {
  const prevDy = document.getElementById('dy');
  const prevSt = document.getElementById('st');

  prevDy && prevDy.remove();
  prevSt && prevSt.remove();

  const scriptPath = (type: string) => `//cdn${id[0] === '8' ? '' : '-eu'}.dynamicyield.com/api/${id}/api_${type}.js`;
  const dynamic_script = document.createElement('script');
  const static_script = document.createElement('script');

  dynamic_script.src = scriptPath('dynamic');
  dynamic_script.id = 'dy';
  static_script.src = scriptPath('static');
  static_script.id = 'st';
  document.head.appendChild(dynamic_script);
  document.head.appendChild(static_script);

  const activeConsent = document.createElement('script');
  activeConsent.id = 'ac';
  activeConsent.textContent = `DY.userActiveConsent = { accepted: ${consent} }`;
  const existingNode = document.getElementById('ac');
  existingNode && document.head.removeChild(existingNode);
  document.head.appendChild(activeConsent);
  window?.DYO?.ActiveConsent?.updateConsentAcceptedStatus(consent);
};

export const parseContext = (data: string) =>
  data
    .replace(/["']/g, '')
    .split(',')
    .map((element) => element.trim());

export const getOSPreference = (): ColorMode =>
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
