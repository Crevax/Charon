<?php

namespace Crevax\PortfolioBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class PortfolioController extends Controller
{
    public function indexAction()
    {
        $account = $this->container->getParameter('github_account');
        $password = $this->container->getParameter('github_password');
        $client = new \Github\Client();
        $client->authenticate($account, $password);
        $repositories = $client->api('current_user')->repositories();

        return $this->render('CrevaxPortfolioBundle:Portfolio:index.html.twig', array(
          'repositories' => $repositories
        ));
    }
}
