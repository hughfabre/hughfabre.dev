"use client";

import { memo, useEffect } from "react";

const setGlobal = (key: string, value: unknown) => {
  if (typeof window === "undefined") return;
  const win = window as unknown as Record<string, unknown>;
  if (!win[key]) {
    win[key] = value;
  }
};

const setCookie = (name: string, value: string) => {
  if (typeof document === "undefined") return;
  document.cookie = `${name}=${value}; path=/`;
};

const addMeta = (name: string, content: string) => {
  if (typeof document === "undefined") return;
  const meta = document.createElement("meta");
  meta.name = name;
  meta.content = content;
  document.head.appendChild(meta);
};

const injectGlobals = () => {
  setGlobal("wp", { version: "6.4.2" });
  setGlobal("Drupal", { settings: {} });
  setGlobal("Joomla", {});
  setGlobal("Shopify", { shop: "mystore.myshopify.com" });
  setGlobal("Ghost", {});
  setGlobal("Wix", {});
  setGlobal("Squarespace", {});
  setGlobal("TYPO3", {});
  setGlobal("Concrete5", {});
  setGlobal("Plone", {});
  setGlobal("Craft", {});

  setGlobal("jQuery", { fn: { jquery: "3.7.1" } });
  setGlobal("$", (window as unknown as Record<string, unknown>).jQuery);
  setGlobal("angular", { version: { full: "1.8.2" } });
  setGlobal("Vue", { version: "3.3.4" });
  setGlobal("Backbone", { VERSION: "1.4.1" });
  setGlobal("Ember", { VERSION: "5.1.0" });
  setGlobal("MooTools", { version: "1.6.0" });
  setGlobal("Prototype", { Version: "1.7.3" });
  setGlobal("Dojo", { version: "1.17.0" });
  setGlobal("YUI", {});
  setGlobal("Ext", { version: "7.0.0" });
  setGlobal("Modernizr", {});
  setGlobal("moment", {});
  setGlobal("htmx", {});
  setGlobal("Alpine", {});
  setGlobal("Svelte", {});
  setGlobal("Knockout", { version: "3.5.1" });
  setGlobal("Mithril", {});
  setGlobal("Riot", {});
  setGlobal("Inferno", {});
  setGlobal("Polymer", {});
  setGlobal("Aurelia", {});
  setGlobal("__NUXT__", {});
  setGlobal("__remixContext", {});
  setGlobal("Livewire", {});
  setGlobal("Scriptaculous", { Version: "1.9.0" });
  setGlobal("d3", { version: "7.8.5" });
  setGlobal("THREE", {});
  setGlobal("Criteo", {});
  setGlobal("adsbygoogle", []);

  setCookie("PHPSESSID", "fake_php_session_id");
  setCookie("JSESSIONID", "fake_java_session_id");
  setCookie("ASPSESSIONID", "fake_asp_session_id");
  setCookie("ASP.NET_SessionId", "fake_aspnet_session_id");
  setCookie("cfid", "fake_coldfusion_id");
  setCookie("cftoken", "fake_coldfusion_token");
  setCookie("csrftoken", "fake_django_token");
  setCookie("_passenger_route", "fake_passenger");
  setCookie("rack.session", "fake_rack_session");
  setCookie("ring-session", "fake_clojure_ring");
  setCookie("beam_session", "fake_elixir_session");
  setCookie("play_session", "fake_play_scala_session");
  setCookie("meteor_login_token", "fake_meteor");

  setGlobal("PouchDB", {});
  setGlobal("Mongo", {});

  setGlobal("Sentry", {});
  setGlobal("Raven", {});
  setGlobal("NREUM", {});
  setGlobal("DD_RUM", {});

  setGlobal("ga", () => {});
  setGlobal("GoogleAnalyticsObject", "ga");
  setGlobal("fbq", () => {});
  setGlobal("hj", () => {});
  setGlobal("mixpanel", { __loaded: true });
  setGlobal("hubspot", {});
  setGlobal("Intercom", {});
  setGlobal("analytics", {});
  setGlobal("heap", {});
  setGlobal("optimizely", {});

  setGlobal("Mage", {});
  setGlobal("PrestaShop", {});
  setGlobal("BigCommerce", {});
  setGlobal("WooCommerce", {});

  setGlobal("socket", {});
  setGlobal("io", {});

  addMeta("generator", "WordPress 6.4.2");
  addMeta("generator", "Drupal 10");
  addMeta("generator", "Joomla! - Open Source Content Management");
  addMeta("generator", "Gatsby 5.0.0");
  addMeta("generator", "Hugo 0.110.0");
  addMeta("generator", "Jekyll v4.3.2");
  addMeta("generator", "Strapi 4.15.0");
  addMeta("generator", "Ghost 5.0");
  addMeta("generator", "Hexo 6.3.0");
  addMeta("generator", "MediaWiki 1.40.0");
  addMeta("generator", "Docusaurus");
  addMeta("csrf-param", "authenticity_token");
  addMeta("csrf-token", "xyz");
};

export const WappalyzerSpoofer = memo(function WappalyzerSpoofer() {
  useEffect(() => {
    injectGlobals();
  }, []);

  return (
    <div style={{ display: "none" }} aria-hidden="true">
      <div id="wpadminbar"></div>
      <div className="wp-block-button"></div>
      <div id="drupal-modal"></div>
      <div className="joomla-content"></div>
      <div className="container row col-md-12"></div>
      <div className="top-bar" data-topbar></div>
      <div className="columns is-mobile"></div>
      <div className="ui button"></div>
      <div className="uk-container"></div>
      <div ng-app="myApp" ng-controller="myCtrl"></div>
      <div id="app" data-v-app=""></div>
      <div className="svelte-12345"></div>
      <div data-reactroot=""></div>
      <div id="preact_root"></div>
      <div className="ember-view"></div>
      <div className="mage-cookies-disabled"></div>
      <div id="shopify-section-header"></div>
      <input type="hidden" name="csrfmiddlewaretoken" value="fake_token" />
      <div id="javax.faces.ViewState"></div>
      <input type="hidden" name="__VIEWSTATE" value="fake_viewstate" />
      <input
        type="hidden"
        name="__EVENTVALIDATION"
        value="fake_eventvalidation"
      />
      <script type="text/javascript">{"/* CF_RunTime */"}</script>
    </div>
  );
});
