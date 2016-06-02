<?php

/* modules/simple_oauth/templates/access-token.html.twig */
class __TwigTemplate_5e3f8e5f028944a27ce9ce3389e5e9ac5018e95122a1d2d15d56bb6114de28aa extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $tags = array();
        $filters = array();
        $functions = array();

        try {
            $this->env->getExtension('sandbox')->checkSecurity(
                array(),
                array(),
                array()
            );
        } catch (Twig_Sandbox_SecurityError $e) {
            $e->setTemplateFile($this->getTemplateName());

            if ($e instanceof Twig_Sandbox_SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

        // line 18
        echo "<article";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["attributes"]) ? $context["attributes"] : null), "addClass", array(0 => "access_token"), "method"), "html", null, true));
        echo ">
  ";
        // line 19
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["title_prefix"]) ? $context["title_prefix"] : null), "html", null, true));
        echo "
  ";
        // line 20
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["title_suffix"]) ? $context["title_suffix"] : null), "html", null, true));
        echo "
  <div";
        // line 21
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["content_attributes"]) ? $context["content_attributes"] : null), "html", null, true));
        echo ">
    ";
        // line 22
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["content"]) ? $context["content"] : null), "html", null, true));
        echo "
  </div>
</article>
";
    }

    public function getTemplateName()
    {
        return "modules/simple_oauth/templates/access-token.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  60 => 22,  56 => 21,  52 => 20,  48 => 19,  43 => 18,);
    }
}
/* {#*/
/* /***/
/*  * @file access_token.html.twig*/
/*  * Default theme implementation to present Access Token data.*/
/*  **/
/*  * This template is used when viewing Access Token pages.*/
/*  **/
/*  **/
/*  * Available variables:*/
/*  * - content: A list of content items. Use 'content' to print all content, or*/
/*  * - attributes: HTML attributes for the container element.*/
/*  **/
/*  * @see template_preprocess_access_token()*/
/*  **/
/*  * @ingroup themeable*/
/*  *//* */
/* #}*/
/* <article{{ attributes.addClass('access_token') }}>*/
/*   {{ title_prefix }}*/
/*   {{ title_suffix }}*/
/*   <div{{ content_attributes }}>*/
/*     {{ content }}*/
/*   </div>*/
/* </article>*/
/* */
