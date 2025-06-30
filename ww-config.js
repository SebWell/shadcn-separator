export default {
  editor: {
    label: {
      en: "shadcn Separator",
      fr: "Séparateur shadcn"
    },
    icon: 'fas fa-minus',
    bubble: {
      icon: 'fas fa-minus'
    },
    deprecated: false
  },
  properties: {
    orientation: {
      label: {
        en: "Orientation",
        fr: "Orientation"
      },
      type: "TextSelect",
      options: {
        options: [
          { value: "horizontal", label: { en: "Horizontal", fr: "Horizontal" } },
          { value: "vertical", label: { en: "Vertical", fr: "Vertical" } }
        ]
      },
      defaultValue: "horizontal",
      section: "settings"
    },
    decorative: {
      label: {
        en: "Decorative",
        fr: "Décoratif"
      },
      type: "OnOff",
      defaultValue: true,
      section: "accessibility",
      help: {
        en: "If true, the separator is purely decorative and not announced by screen readers",
        fr: "Si activé, le séparateur est purement décoratif et n'est pas annoncé par les lecteurs d'écran"
      }
    },
    customClasses: {
      label: {
        en: "Custom CSS classes",
        fr: "Classes CSS personnalisées"
      },
      type: "Text",
      bindable: true,
      section: "style"
    }
  },
  sections: {
    settings: {
      label: { en: "Separator Settings", fr: "Paramètres du séparateur" },
      expand: true
    },
    accessibility: {
      label: { en: "Accessibility", fr: "Accessibilité" },
      expand: false
    },
    style: {
      label: { en: "Style", fr: "Style" },
      expand: false
    }
  }
}; 