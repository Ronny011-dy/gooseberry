export const appendScript = (id: string) => {
  const scriptPath = (type: string) =>
    `//cdn${
      id[0] === '8' ? '' : '-eu'
    }.dynamicyield.com/api/${id}/api_${type}.js`;
  const dynamic_script = document.createElement('script');
  const static_script = document.createElement('script');
  dynamic_script.src = scriptPath('dynamic');
  static_script.src = scriptPath('static');
  document.head.appendChild(dynamic_script);
  document.head.appendChild(static_script);
};
