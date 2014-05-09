<?php

namespace Crevax\SiteBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class SiteController extends Controller
{
    public function indexAction()
    {
        return $this->render('CrevaxSiteBundle:Site:index.html.twig');
    }
}
